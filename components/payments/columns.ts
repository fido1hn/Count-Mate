import { h } from "vue";
import { type ColumnDef } from "@tanstack/vue-table";
import DropdownAction from "@/components/payments/data-table-dropdown.vue";

export interface Payment {
  id: string;
  amount: number;
  payment_method: string;
  date: string;
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "date",
    header: () => h("div", { class: "text-left font-semibold" }, "Date"),
    cell: ({ row }) => {
      const date = String(row.getValue("date"));
      const formatted = date.split("T")[0];

      return h("div", { class: "text-left font-medium" }, formatted);
    },
  },
  {
    accessorKey: "time",
    header: () => h("div", { class: "text-left, font-semibold" }, "Time"),
    cell: ({ row }) => {
      // Convert ISO time to a Date object
      const date = new Date(row.getValue("date"));

      // Extract hours and minutes from the Date object
      const hours = date.getHours();
      const minutes = date.getMinutes();

      // Check if it's morning or afternoon/evening
      const period = hours < 12 ? "am" : "pm";

      // Format hours and minutes with leading zeros if necessary
      const formattedHours = (hours % 12 || 12).toString();
      const formattedMinutes = minutes.toString().padStart(2, "0");

      // Combine hours, minutes, and period
      const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

      return h("div", { class: "text-left font-medium" }, formattedTime);
    },
  },
  {
    accessorKey: "payment_method",
    header: () => h("div", { class: "text-left, font-semibold" }, "Payed with"),
    cell: ({ row }) => {
      const payment_method = String(row.getValue("payment_method"));

      const formatted =
        payment_method.charAt(0).toUpperCase() + payment_method.slice(1);

      return h("div", { class: "text-left font-medium" }, formatted);
    },
  },
  {
    accessorKey: "amount",
    header: () => h("div", { class: "text-left, font-semibold" }, "Amount"),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return h("div", { class: "text-left font-medium" }, formatted);
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return h(
        "div",
        { class: "relative" },
        h(DropdownAction, {
          payment,
        }),
      );
    },
  },
];

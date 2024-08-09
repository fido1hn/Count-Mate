import { h } from "vue";
import { type ColumnDef } from "@tanstack/vue-table";
import DropdownAction from "~/components/payments/DataTableDropdown.vue";
import { UIcon } from "#components";

export interface Payment {
  id: string;
  amount: number;
  payment_method: string;
  date: string;
  time: string;
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "date",
    header: () =>
      h(
        "div",
        {
          class: "text-left, font-semibold, text-base text-gray-500",
        },
        "Date",
      ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const formatted = date.toLocaleDateString("en-NG", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      return h("div", { class: "text-left, font-medium" }, formatted);
    },
  },
  {
    accessorKey: "time",
    header: () =>
      h(
        "div",
        { class: "text-left, font-semibold, text-base text-gray-500" },
        "Time",
      ),
    cell: ({ row }) => {
      // Convert ISO time to a Date object
      const time = new Date(row.getValue("time"));

      // Extract hours and minutes from the Date object
      const hours = time.getHours();
      const minutes = time.getMinutes();

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
    header: () =>
      h(
        "div",
        { class: "text-left, font-semibold, text-base text-gray-500" },
        "Payed with",
      ),
    cell: ({ row }) => {
      const payment_method = String(row.getValue("payment_method"));

      const formatted =
        payment_method.charAt(0).toUpperCase() + payment_method.slice(1);

      const icon =
        payment_method === "transfer"
          ? "i-solar-transfer-horizontal-linear"
          : "i-heroicons-credit-card";

      return h("div", { class: "text-left font-medium flex items-center" }, [
        h(UIcon, { name: icon, class: "w-4 h-4 mr-1.5" }),
        formatted,
      ]);
    },
  },
  {
    accessorKey: "amount",
    header: () =>
      h(
        "div",
        { class: "text-left, font-semibold, text-base text-gray-500" },
        "Amount",
      ),
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
      return h("div", { class: "relative" }, h(DropdownAction));
    },
  },
];

<script setup lang="ts" generic="TData, TValue">
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/vue-table";
import {
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useVueTable,
} from "@tanstack/vue-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const props = defineProps<{
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}>();

const table = useVueTable({
  get data() {
    return props.data;
  },
  get columns() {
    return props.columns;
  },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
});
</script>

<template>
  <div class="">
    <Table>
      <TableHeader class="">
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            :data-state="row.getIsSelected() ? 'selected' : undefined"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>
        </template>
        <template v-else>
          <TableRow>
            <TableCell :colspan="columns.length" class="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>

    <div class="mt-2 flex items-center justify-between py-4">
      <Button
        variant="outline"
        size="sm"
        :disabled="!table.getCanPreviousPage()"
        class="dark:bg-gray-900"
        @click="table.previousPage()"
      >
        <UIcon
          name="i-heroicons-arrow-long-left-20-solid"
          class="mr-2 h-4 w-4"
        />
        Previous
      </Button>

      <div class="flex items-center">
        <!-- Adding this section breaks chrome(add a second scrollbar) but not firefox -->
        <!-- <div class="flex items-center space-x-2">
          <p class="text-sm font-medium">Rows per page</p>
          <Select
            :model-value="`${table.getState().pagination.pageSize}`"
            @update:model-value="table.setPageSize"
          >
            <SelectTrigger class="h-8 w-[70px]">
              <SelectValue
                :placeholder="`${table.getState().pagination.pageSize}`"
              />
            </SelectTrigger>
            <SelectContent side="top" class="dark:bg-gray-800">
              <SelectItem
                v-for="pageSize in [10, 20, 30, 40, 50]"
                :key="pageSize"
                :value="`${pageSize}`"
              >
                {{ pageSize }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div> -->

        <div
          class="flex w-[100px] items-center justify-center text-sm font-medium"
        >
          Page {{ table.getState().pagination.pageIndex + 1 }} of
          {{ table.getPageCount() }}
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        :disabled="!table.getCanNextPage()"
        class="dark:bg-gray-900"
        @click="table.nextPage()"
      >
        Next
        <UIcon
          name="i-heroicons-arrow-long-right-20-solid"
          class="ml-2 h-4 w-4"
        />
      </Button>
    </div>
  </div>
</template>

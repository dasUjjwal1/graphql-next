export type DataState<T> = {
  type: "CREATE" | "UPDATE";
  data: T | null;
};

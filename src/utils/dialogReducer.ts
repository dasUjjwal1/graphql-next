import {
  DataState,
  DialogAction,
  DialogActionType,
  DialogType,
} from "@/types/appTypes";
import { produce } from "immer";
export const dialogInitialValue: DataState<any> = {
  type: DialogType.CREATE,
  data: null,
  state: false,
};
export const dialogReducer = produce(
  (state: DataState<any>, action: DialogAction<any>) => {
    switch (action.type) {
      case DialogActionType.CREATE_OPEN:
        state.state = true;
        state.type = DialogType.CREATE;
        state.data = null;
        break;
      case DialogActionType.EDIT_OPEN:
        state.state = true;
        state.type = DialogType.UPDATE;
        state.data = action.payload;
        break;
      case DialogActionType.CLOSE:
        state.state = false;
        state.type = DialogType.CREATE;
        state.data = null;
        break;
      default:
        return state;
    }
  }
);

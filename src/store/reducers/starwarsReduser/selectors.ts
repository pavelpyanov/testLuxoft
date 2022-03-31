import { rootReducer } from "..";
import { moduleName } from "./constants";
import { IStarWarsStore } from "./types";

export const selectStarwars = (
  state: ReturnType<typeof rootReducer>
): IStarWarsStore => state[moduleName];

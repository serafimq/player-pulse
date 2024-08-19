import { createSelector } from "@reduxjs/toolkit";
import { getCouneter } from "../getCounter/getCounter";
import { CounterSchema } from "../../types/counterSchema";

export const getCouneterValue = createSelector(getCouneter, (counter: CounterSchema) => counter.value)
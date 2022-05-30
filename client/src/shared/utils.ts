import dayjs from "dayjs"
import { Passager } from "../../../server/shared/type"
export const getCurrentDate = () => dayjs()

export const mockPassager: Passager[] = [
    {
        id: "1",
        type: "adulte",
    },
    {
        id: "1",
        type: "enfant",
    },
]

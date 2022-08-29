import { HiddenDataType, makeMonthlyHiddenStore } from '@models/hidden-store'
import { TEnvelopeId } from '@shared/types'

export type TBudgets = Record<TEnvelopeId, number>

export const budgetStore = makeMonthlyHiddenStore<TBudgets>(
  HiddenDataType.Budgets
)

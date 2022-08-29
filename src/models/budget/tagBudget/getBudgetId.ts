import { TTagId } from '@shared/types'
import { TBudgetId } from '@shared/types'
import { toISODate } from '@shared/helpers/date'
import { TDateDraft, TISOMonth } from '@shared/types'
import { toBudgetId } from '@shared/api/zm-adapter'

export function getBudgetId(date: TDateDraft, tag: TTagId | null): TBudgetId {
  return toBudgetId(toISODate(date), tag)
}

export function getISOMonthFromBudgetId(id: TBudgetId): TISOMonth {
  return id.slice(0, 7) as TISOMonth
}

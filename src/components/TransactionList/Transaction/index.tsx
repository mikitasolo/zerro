import React, { FC, useCallback } from 'react'
import { useSearchParam } from 'shared/hooks/useSearchParam'
import { useAppSelector } from 'models'
import { RootState } from 'models'
import { getTransactions } from 'models/data/transactions'
import { getType } from 'models/data/transactions/helpers'
import { getDebtAccountId } from 'models/data/accounts'
import { Transaction } from './Transaction'
import { useContextMenu, TransactionMenu } from './ContextMenu'

export type WrapperProps = {
  id: string
  isChecked: boolean
  isInSelectionMode: boolean
  onToggle: (id: string) => void
  onSelectChanged: (date: number) => void
  onFilterByPayee: (date: string) => void
}

const TransactionWrapper: FC<WrapperProps> = props => {
  const {
    id,
    isInSelectionMode,
    isChecked,
    onToggle,
    onFilterByPayee,
    onSelectChanged,
  } = props
  const [onContextMenu, bind] = useContextMenu()
  const [opened, setOpened] = useSearchParam('transaction')
  const isOpened = opened === id
  const transaction = useAppSelector(
    (state: RootState) => getTransactions(state)[id]
  )
  const debtId = useAppSelector(getDebtAccountId)
  const type = getType(transaction, debtId)
  const onClick = useCallback(() => setOpened(id), [id, setOpened])

  return (
    <>
      <Transaction
        {...{
          // Data
          id,
          transaction,
          type,
          isInSelectionMode,
          isChecked,
          isOpened,
          // Actions
          onClick,
          onToggle,
          onFilterByPayee,
          onContextMenu,
        }}
      />
      <TransactionMenu
        id={id}
        transaction={transaction}
        onSelectChanged={onSelectChanged}
        {...bind}
      />
    </>
  )
}

export default TransactionWrapper

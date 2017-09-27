/*
This function will take the result of returnDepositsWithdrawals and return an array of transactions.
 */
const polonlyze = async (data) => {

  const txs = []

  data.deposits.map(tx => {
    const dist = []

    let dr_account, cr_account, dr_amt, cr_amt

    dr_account = {type:'a', cur:tx.currency, desc:'balance'}
    dr_amt = parseFloat(tx.amount)

    cr_account = {type:'eq', cur:tx.currency, desc:'capital'}
    cr_amt = -parseFloat(tx.amount)

    dist.push({acct: dr_account,  amt: dr_amt})
    dist.push({acct: cr_account,  amt: cr_amt})

    const newTx = {dist}
    newTx.timestamp = tx.timestamp

    txs.push(newTx)
  })

  // Warning! This omits the fees. If you withdraw money then capital and balance change the same amount.  Fees are paid by the recipient.
  data.withdrawals.map(tx => {
    const dist = []

    let dr_account, cr_account, fee_account, dr_amt, cr_amt, fee_amt
    dr_account = {type:'eq', cur:tx.currency, desc:'capital'}
    dr_amt = parseFloat(tx.amount)

    cr_account = {type:'a', cur:tx.currency, desc:'balance'}
    cr_amt = -parseFloat(tx.amount)

    dist.push({acct: dr_account,  amt: dr_amt})
    dist.push({acct: cr_account,  amt: cr_amt})

    const newTx = {dist}
    newTx.timestamp = tx.timestamp

    txs.push(newTx)
  })

  return txs
}

module.exports = polonlyze

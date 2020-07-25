# incoming-analyst
An LBO practice app for analyst interview prep

---Variables---

Entry_multiple = Number between 5 and 10

LTM_Rev = Even number between 100 and 900

EBITDA_margin = Either 10, 20, 30, 40

Debt_percent = Either 50, 60, 70, 80

Int_rate = Either 5 or 10

Rev_growth Either 5, 10, 15, 20

Tax_rate = Either 20, 25, 30, 35, 40

CapEx_pr = Either 5, 10, or 20

NWC_pr = Either 10 or 20

--Secondary Variables and Arrays--

Entry_EV = Entry_Mult * EBITDA_Array[0]

Entry_ND = Debt_percent * Entry_EV

Entry_Equity = Entry_EV - Entry_ND

DA_pr = CapEx_pr

Year_array = [0,1,2,3,4,5]

Rev_array = [LTM_Rev * (1+Rev_growth)^(i+1)] <- iterated

EBITDA_array = Rev_array * EBITDA_margin

DA_array = Rev_array * DA_pr

Int_array = Int_rate * Entry_ND

EBIT_array = EBITDA_array - DA_array

PTI_array = EBIT_array - Int_array

Tax_array = PTI_array * Tax_rate

NI_array = PTI_array - Tax_rate

CapEx_array = Rev_array * CapEx_pr

NWC_array = Rev_array * NWC_pr

NWC_Change_array = [NWC_array[i+1]-NWC_array[i]] <- 0 in first year and change in value of NWC_array from year to year after that

FCF_array = NI_array + DA_array - NWC_Change_array - CapEx_array


Exit_Mult = Entry_Mult

Exit_EV = Exit_mult * EBITDA_Array[5] 

Exit_ND = Entry_ND - sum(FCF_Array[1:5]) <- Only sum the last 5 values (Drop the 0th value)

Exit_Equity = Exit_EV - Exit_ND

MoM = Exit_Equity / Entry_Equity

IRR = MoM ^ (1/5) - 1

---Prompt---

You are tasked with evaluating an investment opportunity in Company A, which has an LTM Revenue of [LTM_Rev] and an EBITDA Margin of [EBITDA_margin] percent.

Your firm is considering to fund the acquisition with [Debt_percent] percent debt with an interest rate of [Int_rate].

The management is confident that the firm can acheive a growth of [Rev_growth] per year and maintain constant EBITDA margins.

The firm has a tax rate of [Tax_rate].

Capital Expenditures are equal to 10 percent of the revenue and are equal to Depreciation

Net Working Capital is [NWC_per] percent of revenue each year

What would the IRR of this investment be over a 5 year horizon?

---
title: Ratification Poll for Amend Measurement Period For Delegate Participation Metrics (MIP4c2-SP24) - September 12, 2022
summary: This proposed amendment is to shorten the feedback loop for delegate participation, which is a key variable of their compensation calculation.
discussion_link: https://forum.makerdao.com/t/mip4c2-sp24-amend-measurement-period-for-delegate-participation-metrics/16904
parameters:
    input_format:
        type: single-choice
        abstain: [0]
    victory_conditions:
        - {
            type: 'and',
            conditions: [
                { type : plurality },
                { type : comparison, comparator : '>=', value: 10000 }
            ]
        }
        - {type : default, value : 2 }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2022-09-12T16:00:00
end_date: 2022-09-26T16:00:00
---
# Ratification Poll for Amend Measurement Period For Delegate Participation Metrics (MIP4c2-SP24) - September 12, 2022

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, September 12 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to (MIP4c2-SP24)) being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*This proposed amendment is to shorten the feedback loop for delegate participation, which is a key variable of their compensation calculation. It may result in more volatility in delegate earnings based on their recent participation, which is considered a feature.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/115e97a7abd977b192ff67c2a7b1da9663e88c77/MIP4/MIP4c2-Subproposals/MIP4c2-SP24.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP4c2SP24)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip4c2-sp24-amend-measurement-period-for-delegate-participation-metrics/16904)

Please note that if the parallel vote for the Delegate MIP Set (MIP77-79) is successful, MIP61 will be made obsolete and this amendment will have no appreciable effect on the Maker Protocol.

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, September 29.
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).

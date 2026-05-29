# Smart Contract Security Audit Report

## 1. VulnerableBank.sol
- Vulnerability: Reentrancy
- Description: External call before state update allows repeated withdrawals
- Impact: Funds can be drained by attacker
- Severity: High

## 2. SecureBank.sol
- Mitigation: Checks-Effects-Interactions pattern
- Status: Secure
- Severity: Low

## 3. SimpleStorage.sol
- Vulnerability: Limited access control risk
- Mitigation: onlyOwner modifier
- Severity: Medium

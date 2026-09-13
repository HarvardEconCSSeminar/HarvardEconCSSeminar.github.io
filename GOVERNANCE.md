# Governance and organizer handoff

The GitHub organization and repository belong to the Harvard EconCS Seminar, not to an individual organizer.

## Required organization setup

- Organization: `HarvardEconCSSeminar`
- Public organization-site repository: `HarvardEconCSSeminar.github.io`
- At least two current seminar leaders must be organization owners at all times.
- Require two-factor authentication for every organization member.
- Create an `organizers` team and grant it **Maintain** access to the repository.
- Never create or share a seminar GitHub login. Every person uses an individual account.
- Set the repository’s Pages source to **GitHub Actions**.
- Protect `main`: block force pushes and deletion, require a pull request, and require the `validate` job from “Validate site” before merging.
- Keep `.github/CODEOWNERS` active so the organizers team is requested for review.

## Annual handoff checklist

Complete this at least once per academic year and whenever an organizer changes.

1. A continuing owner invites the incoming leader using that person’s individual GitHub account.
2. The incoming leader enables 2FA, accepts organization membership, joins `organizers`, and confirms repository access.
3. If the person will steward organization membership and settings, promote them to owner. Confirm that at least two active owners remain.
4. Review `src/data/site.json`: organizers, shared contact, mailing list, recurring time, location, and map.
5. Confirm the shared contact and mailing-list accounts are seminar-controlled and have at least two administrators outside GitHub.
6. Make a small test pull request and confirm validation, review routing, merge protection, Pages deployment, calendar subscription, and HTTPS.
7. Only after the successor has accepted and tested access, remove a departing person from the owners group/team as appropriate.
8. Record completion in a repository issue named `Organizer handoff YYYY–YY` without posting credentials or private recovery information.

Repository access changes and organization-owner promotions are performed in GitHub settings; they cannot be encoded safely in this public repository.

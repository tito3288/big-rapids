# Client Website Revision Checklist

Source: **Big Rapids Products Website — Website Revision Action List**
Baseline: **BRP Website Strategy & Copy Comparison**
Audit rule: An item is only marked complete after implementation and verification.

## Status Key

- `[ ]` Pending
- `[x]` Completed and verified
- `[~]` Implemented or present; final client/asset confirmation still required
- `[!]` Blocked by a missing asset or client decision
- `[-]` No change requested

## High Priority — Before Launch

### Mobile Navigation

- [x] On mobile, make the Request a Quote action/header display again whenever the user scrolls upward, matching desktop behavior. Verified at 390 × 844: visible at top, hidden after downward scroll, restored after upward scroll, and the hamburger remains in view.

### Homepage Images

- [x] Replaced all five homepage product-category images with the BRP photography supplied by the client through text and verified them in the rendered page.
- [x] Structural Components: the newly supplied structural-components image is assigned and its crop/source match was verified on the Homepage and Products page.
- [x] Class A Wheel Cladding: the client-supplied wheel-cladding image is assigned and verified on both pages.
- [x] EV · Appliance · Building: the client-supplied combined-category image is assigned and verified on both pages.
- [x] Appliance Components: the newly supplied appliance image is assigned and its crop/source match was verified on the Homepage and Products page.

### Contact Information

- [x] Footer includes phone `(231) 796-3593` with a verified `tel:` link.
- [x] Footer includes fax `(231) 796-9066`.
- [x] Added a Quick Email link to `/#contact`; the server-side contact handler targets `info@BRProducts.com`, and the address is not exposed in the rendered page or a `mailto:` link.

### Remove Outdated Items

- [x] Removed the Press Specification Sheet download/link and verified no matching link/reference remains.
- [x] Verified no BRP Employee Portal link or reference exists.
- [x] Replaced the former externally hosted one-page certificate with the client-supplied three-page Michigan and Kentucky IATF certificate package. Michigan expires September 15, 2027; Kentucky expires September 29, 2027.

### IATF Certificate Links

- [x] Kept the IATF certificate link at the top of the Quality page and updated it to the new local certificate package.
- [x] Kept the existing View Certificate action at the bottom of the Quality page and updated it to the new local certificate package.
- [x] Verified ordinary IATF mentions elsewhere are not hyperlinked.

## Capabilities Page

- [x] Hero image: replaced with client-supplied Photo 2908 (Advanced Metal Stamping).
- [x] Engineering section: replaced with client-supplied Photo 1299.
- [x] Assembly section: replaced with client-supplied Photo 3656.
- [x] Removed the View Press Specifications / Press Specifications buttons.
- [x] Added the approved replacement guidance and linked `Contact our team` to `/#contact`.
- [x] Removed the decorative red `Joining` label.
- [x] Verified both Capabilities-page Start a Project actions route to `/#contact`.

## Quality Page

- [x] Hero image: replaced with client-supplied Photo 1232.
- [x] Removed the decorative red `Systems` label.
- [x] Removed the decorative red `Confidence` label.

## Products Page

- [x] The Products page uses the exact client-supplied Homepage source images for Structural, Exhaust, Class A Trim, Wheel Cladding, and the combined EV/Appliance section.
- [x] Verified the five currently available image assignments, rendered image paths, alt text, and crops across the Homepage and Products page.

## Footer Updates

- [x] Linked LinkedIn to `https://www.linkedin.com/company/big-rapids-products/posts/?feedView=all`.
- [x] Linked Instagram to `https://www.instagram.com/bigrapidsproducts/?hl=en`.
- [x] Linked Facebook to `https://www.facebook.com/BigRapidsProducts`.
- [x] Removed X (Twitter).
- [x] Removed YouTube.

## About Page

- [x] Image 1: replaced with the client-supplied historic Big Rapids Tool & Engineering building photograph and preserved its full wide composition.
- [x] Image 2: replaced with client-supplied Photo 7755.
- [!] Image 3: deferred to the final client email. The requested large drone facility image is not present in the supplied Google Photos collection or workspace.

## Careers Page

- [-] No major content revisions requested.
- [x] Included the Careers page in the first-pass desktop route, content, and overflow QA; no requested content change was identified.

## Branding / Navigation

- [!] Header-logo update deferred to the final client email. The white plate should be removed after the exact light-on-dark style-guide variant is confirmed and supplied.
- [!] Ask the client to confirm the precise reversed/light logo variant for the dark header; the style guide contains multiple viable color variants.
- [!] Apply the confirmed standalone logo treatment consistently across every page after the correct asset is supplied.

## Final QA

- [x] Desktop navigation and requested CTA destinations verified.
- [x] Mobile navigation, 390 px layout, scroll direction behavior, menu panel, and quote action verified.
- [x] Footer phone, fax, Quick Email, and three social destinations verified in the rendered page.
- [x] Contact form server-side delivery target verified as `info@BRProducts.com`.
- [!] A real successful contact-form delivery test requires the deployed email configuration and would send an external email; not performed in this local QA pass.
- [x] Both Quality-page certificate links and the complete replacement PDF were verified.
- [x] Obsolete-link/reference scan completed.
- [x] Product-photography consistency verified across the Homepage and Products page using the five client-supplied images.
- [!] Header-logo consistency is deferred pending the client confirmation requested in the final email.
- [x] Astro production build passed; Astro check reports 0 errors, 0 warnings, and 0 hints.
- [~] First-pass route, content, responsive-overflow, and targeted visual QA completed for Homepage, Capabilities, Quality, Products, About, and Careers. Repeat final visual QA after the missing assets are installed.

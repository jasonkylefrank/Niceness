import Link from 'next/link';
import { InlineLink } from './_sharedStyles';

// Inspiration: https://github.com/vercel/next.js/issues/1942#issuecomment-437680021

export default function NextInlineLink({ 
  className, 
  children, 
  href, 
  otherNextLinkProps, 
  otherAnchorProps 
}) {
  return (
    <Link href={href} passHref {...otherNextLinkProps}>
      <InlineLink className={className} {...otherAnchorProps}>{ children }</InlineLink>
    </Link>
  );
}
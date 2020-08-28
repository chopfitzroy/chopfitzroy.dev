import Icon from "./icon";
import Link from "./link";

const Social = ({ twitch = null, twitter = null } = {}) => {
  const links = [];

  // If I was nesting any deeper than this would want to refactor `Link` to accept children
  if (twitch) links.push(<Link href={twitch} text={<Icon name="twitch" />} />);
  if (twitter)
    links.push(<Link href={twitter} text={<Icon name="twitter" />} />);

  return <div class="mb-8">{links}</div>;
};

export default Social;

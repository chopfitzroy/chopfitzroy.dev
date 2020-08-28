const Link = ({ href = null, text = null, target = "_blank" } = {}) => {
  if (!href) throw new Error(`Invalid 'href' provided in 'Link'`);
  if (!text) throw new Error(`Invalid 'text' provided in 'Link'`);

  return (
    <a class="inline-block text-teal-600" href={href} target={target}>
      {text}
    </a>
  );
};

export default Link;
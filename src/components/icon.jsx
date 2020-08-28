import icons from "simple-icons";

// Technically `simple-icons` does provide an `svg` field for each icon
// However for whatever reason preact rendered these as the literal string
// As a result I opted to create a smaller helper component to handle this
// https://preactjs.com/guide/v10/differences-to-react/#svg-inside-jsx
const Icon = ({ name = null } = {}) => {
  if (!name) throw new Error(`Invalid 'name' provided in 'Icon'`);

  const config = icons.get(name);

  if (!config)
    throw new Error(
      `Unable to find valid configuration for '${name}' in 'Icon'`
    );

  return (
    <>
      <svg
        class="block w-12 h-12 mx-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path fill={`#${config.hex}`} d={config.path} />
      </svg>
    </>
  );
};

export default Icon;

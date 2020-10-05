<template>
  <slot
    :$$padding="{
      class: $style.root,
      style,
    }"
  />
</template>

<script>
import { spacings } from '../assets/json/style.config.json';

const RESPONSIVE_SUFFIX_SEPARATOR = `@`;
const VARIABLE_BREAKPOINT_SEPARATOR = `-bp-`;

export default {
  name: 'ProvideStylePadding',
  props: {
    padding: {
      default: ()=>['m'],
      type: Array,
    },
  },
  setup(props) {
    let style = {};
  
    for (let propertyValue of props.padding) {
        console.log(props)
      let [option, breakpoint] = propertyValue.split(RESPONSIVE_SUFFIX_SEPARATOR);
      let name = [`--padding`, breakpoint]
        .filter(x => x) // Remove `undefined` breakpoint.
        .join(VARIABLE_BREAKPOINT_SEPARATOR);
      
      style[name] = spacings[option];
    }
    console.log(spacings)
    return { style };
  },
};
</script>

<style lang="scss" module>
.root {
  /**
   * Default values.
   * These are overwritten if they are
   * explicitly set in the styles.
   */
  --padding-bp-s: var(--padding);
  --padding-bp-m: var(--padding-bp-s);
  --padding-bp-l: var(--padding-bp-m);

  padding: var(--padding);

  @media (min-width: 376px) {
    padding: var(--padding-bp-s);
  }

  @media (min-width: 768px) {
    padding: var(--padding-bp-m);
  }

  @media (min-width: 1024px) {
    padding: var(--padding-bp-l);
  }
}
</style>
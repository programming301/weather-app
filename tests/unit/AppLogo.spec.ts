import { mount } from '@vue/test-utils';
import AppLogo from '@/components/AppLogo.vue';
import allowedSizes from '@/consts/allowed-sizes.const';

describe('AppLogo.vue', () => {
  it('should append class passed as "size" prop to the img tag', () => {
    const [size] = allowedSizes.slice(-1);

    const wrapper = mount(AppLogo, {
      props: { size },
    });
    const img = wrapper.find('img');

    expect(img.classes())
      .toContain(size);
  });

  allowedSizes.forEach((size: string) => {
    it(`"size" prop validator should return true for value: "${size}"`, () => {
      const { validator } = AppLogo.props.size;

      expect(validator(size))
        .toBe(true);
    });
  });

  it('"size" prop validator should return false for any other value', () => {
    const { validator } = AppLogo.props.size;

    expect(validator('otherValue'))
      .toBe(false);
  });

  it('"size" prop should default to "small" when not passed', () => {
    const smallSize = allowedSizes[0];

    const wrapper = mount(AppLogo);
    const img = wrapper.find('img');

    expect(img.classes())
      .toContain(smallSize);
  });
});

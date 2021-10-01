import { mount } from '@vue/test-utils';
import SearchInput from '@/components/SearchInput.vue';

describe('SearchInput.vue', () => {
  it('should contain input with placeholder', () => {
    const wrapper = mount(SearchInput);

    const input = wrapper.find('input');

    expect(input.attributes().placeholder)
      .toBeTruthy();
  });
});

import { mount } from '@vue/test-utils';
import AppHeader from '@/components/layout/AppHeader.vue';
import appName from '@/consts/app-name.const';
import AppLogo from '@/components/shared/AppLogo.vue';

describe('AppHeader.vue', () => {
  describe('home path ("/")', () => {
    const mockRoute = {
      fullPath: '/',
    };

    it('should not show the app logo', () => {
      const wrapper = mount(AppHeader, {
        global: {
          mocks: {
            $route: mockRoute,
          },
          components: {
            AppLogo,
          },
        },
      });

      expect(wrapper.find('img').exists()).toBe(false);
    });

    it('should show the app name', () => {
      const wrapper = mount(AppHeader, {
        global: {
          mocks: {
            $route: mockRoute,
          },
          components: {
            AppLogo,
          },
        },
      });

      const appNameContainer = wrapper.find('.app-name');

      expect(appNameContainer.text()).toEqual(appName);
    });
  });

  /* describe('other path (not "/")', () => {
    it('should show the app logo', () => {
    });

    it('should show chosen city name', () => {
    });

    it('should not show the app name', () => {
    });
  }); */
});

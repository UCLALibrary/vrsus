import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Nav from '@/components/Nav.vue';
import Search from '@/components/Search.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});

describe('Nav.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'About Give Us Feedback';
    const wrapper = shallowMount(Nav, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});

describe('Search.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Search';
    const wrapper = shallowMount(Search, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});

import '../../../../dist/wc-main';
import { html } from 'lit';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Components/Alert',
  args: {
    label: 'Alert'
  }
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => html`
  <wc-alert theme="${args.theme}">${args.label}</wc-alert>
`;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  theme: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  theme: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  theme: 'danger',
};

export const Info = Template.bind({});
Info.args = {
  theme: 'info',
};

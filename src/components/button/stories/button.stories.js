import '../../../../dist/crowned-main';
import { html } from 'lit';
import '../button';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonElement',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => html`
  <button-element type="button" theme="${args.theme}">${args.label}</button-element>
  <button-element type="button" theme="${args.theme}" outline>${args.label}</button-element>
`;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  theme: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  label: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  theme: 'success',
  label: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
  theme: 'warning',
  label: 'Button',
};

import type { Meta, StoryObj } from "@storybook/react";

import Page from "@/app/(marketing)/paiement/page";

const meta: Meta<typeof Page> = {
  title: "Pages/Payment",
  component: Page,
  parameters: { layout: "fullscreen" },
};

export default meta;
export const Default: StoryObj<typeof Page> = {};

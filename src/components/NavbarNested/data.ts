import { IconAddressBook, IconBox, IconBuildingSkyscraper } from "@tabler/icons-react";

export const mockdata = [
    {
      label: 'Personal settings',
      icon: IconAddressBook,
      initiallyOpened: true,
      links: [
        { label: 'Profile', link: '/' },
        { label: 'Notifications', link: '/' },
        { label: 'Credentials', link: '/' },
      ],
    },
    {
      label: 'Product settings',
      icon: IconBox,
      initiallyOpened: true,
      links: [
        { label: 'Attributes', link: '/' },
        { label: 'Group mentions', link: '/' },
        { label: 'Task forms', link: '/' },
        { label: 'Integrations', link: '/' },
      ],
    },
    {
      label: 'Workspace settings',
      icon: IconBuildingSkyscraper,
      initiallyOpened: true,
      links: [
        { label: 'Billing', link: '/' },
        { label: 'Users', link: '/' },
        { label: 'Company', link: '/' },
        { label: 'Permissions', link: '/' },
      ],
    },
  ];
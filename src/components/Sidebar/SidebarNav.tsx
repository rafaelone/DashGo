import { Box, Stack } from '@chakra-ui/react';

import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodFill,
} from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine} text="Dashboard" />
        <NavLink href="/users" icon={RiContactsLine} text="Usuários" />
      </NavSection>
      <Box>
        <NavSection title="AUTOMAÇÃO">
          <NavLink href="/forms" icon={RiInputMethodFill} text="Formulários" />
          <NavLink href="/automations" icon={RiGitMergeLine} text="Automação" />
        </NavSection>
      </Box>
    </Stack>
  );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { paths } from '@/routes/path';
import { useTheme } from '@/context/theme';
import { THEME_MODE } from '@/types/theme';
import Switcher from '@/components/switcher';

const Header = () => {
  const { themeMode, changeThemeMode } = useTheme();
  const isSelected = themeMode === THEME_MODE.dark;

  const themeHandler = () => changeThemeMode();

  return (
    <header className="general_padding flex items-center justify-between">
      <Link href={paths.root}>
        <Image width={32} height={32} src={`/assets/images/logo_${themeMode}.svg`} alt="logo" />
      </Link>
      {/*TODO find solution to rerender component in right way*/}
      <div key={themeMode}>
        <Switcher defaultSelected={isSelected} text="Theme mode" onChange={themeHandler} />
      </div>
    </header>
  );
};

export default Header;

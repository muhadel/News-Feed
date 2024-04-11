import Link from 'next/link';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { Title, Collapse } from 'rizzui';
import cn from '@/utils/class-names';
import { PiCaretDownBold } from 'react-icons/pi';
import { mainMenuItems as menuItems } from '@/layouts/main-layout/main-menu-items';

export function SidebarMenu() {
  const pathname = usePathname();

  return (
    <div className="mt-4 pb-3 3xl:mt-6">
      {menuItems.map((category: any) => (
        <Fragment key={category.id}>
          <Title
            as="h6"
            className={cn(
              'mb-2 truncate px-6 text-xs font-normal uppercase tracking-widest text-gray-500 2xl:px-8',
              category.id !== '000' && 'mt-6 3xl:mt-7'
            )}
          >
            {category.name}
          </Title>
          {category.menuItems.map((item: any) => {
            const isActive = pathname === item.href;

            return item.menuItems ? (
              <Collapse
                key={item.id}
                defaultOpen={false} // You can set default open state here if needed
                header={({ open, toggle }) => (
                  <div
                    onClick={toggle}
                    className={cn(
                      'group relative mx-3 flex cursor-pointer items-center justify-between rounded-md px-3 py-2 font-medium lg:my-1 2xl:mx-5 2xl:my-2',
                      isActive
                        ? 'before:top-2/5 text-primary before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5'
                        : 'text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-700/90 dark:hover:text-gray-700'
                    )}
                  >
                    <span className="flex items-center">
                      {item.icon && (
                        <span
                          className={cn(
                            'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                            isActive
                              ? 'text-primary'
                              : 'text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700'
                          )}
                        >
                          {item.icon}
                        </span>
                      )}
                      {item.name}
                    </span>

                    <PiCaretDownBold
                      strokeWidth={3}
                      className={cn(
                        'h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200 rtl:rotate-90',
                        open && 'rotate-0 rtl:rotate-0'
                      )}
                    />
                  </div>
                )}
              >
                {item.menuItems.map((subItem: any) => {
                  const isChildActive = pathname === subItem.href;

                  return (
                    <Link
                      key={subItem.id}
                      href={subItem.href}
                      className={cn(
                        'mx-3.5 mb-0.5 flex items-center justify-between rounded-md px-3.5 py-2 font-medium capitalize last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5',
                        isChildActive
                          ? 'text-primary'
                          : 'text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900'
                      )}
                    >
                      <div className="flex items-center truncate">
                        <span
                          className={cn(
                            'me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200',
                            isChildActive
                              ? 'bg-primary ring-[1px] ring-primary'
                              : 'opacity-40'
                          )}
                        />{' '}
                        <span className="truncate">{subItem.name}</span>
                      </div>
                    </Link>
                  );
                })}
              </Collapse>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'group relative mx-3 my-0.5 flex items-center justify-between rounded-md px-3 py-2 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2',
                  isActive
                    ? 'before:top-2/5 text-primary before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5'
                    : 'text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-700/90'
                )}
              >
                <div className="flex items-center truncate">
                  {item.icon && (
                    <span
                      className={cn(
                        'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                        isActive
                          ? 'text-primary'
                          : 'text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700'
                      )}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className="truncate">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </Fragment>
      ))}
    </div>
  );
}

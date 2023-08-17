// export const Layout: FC<LayoutProps> = ({
//     children,
//     headerProps,
//     footerProps,
//   }) => {
//     return (
//       <>
//         <Header {...headerProps} />
//         <Main>{children}</Main>
//         <Footer {...footerProps} />
//       </>
//     );
//   };

import React from "react";

type Props = {};

export default function Layout({}: Props) {
  return <div>Layout</div>;
}

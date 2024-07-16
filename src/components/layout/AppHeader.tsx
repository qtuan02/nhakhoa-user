"use client"
import { Header } from "antd/es/layout/layout";
import { Avatar } from "antd";
import Link from "next/link";
import CRow from "@/custom_antd/CRow";
import CCol from "@/custom_antd/CCol";
import CMenu from "@/custom_antd/CMenu";
import { customItemMenu } from "@/utils/FunctionHelpers";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import CButton from "@/custom_antd/CButton";

export default function AppHeader() {
    const choose = usePathname();

    const items = [
        {
            key: "/trang-chu",
            label: "Trang chủ"
        },
        {
            key: "/gioi-thieu",
            label: "Giới thiệu"
        },
        {
            key: "/dich-vu",
            label: "Dịch vụ"
        },
        {
            key: "/doi-ngu-nha-si",
            label: "Đội ngũ nha sĩ"
        }
    ];

    return (
        <Header className="!bg-[#fff] border-b border-[#f1f1f1] shadow-xl fixed top-0 left-0 w-full z-50">
            <CRow className="h-full">
                <CCol xs={4} className="h-[64px]">
                    <a href="/"><Avatar shape="square" size={64} src="/logo.png" /></a>
                </CCol>
                <CCol xs={15} className="h-full">
                    <CMenu
                        className="h-full"
                        mode={"horizontal"}
                        items={items.map((item) =>
                            customItemMenu(
                                <Link className="text-[16px] font-[500] px-3" href={item.key}>{item.label}</Link>,
                                item.key
                            )
                        )}
                        selectedKeys={[choose]}
                    />
                </CCol>
                <CCol xs={5} className="h-full">
                    <CRow>
                        <CCol xs={12}>
                            <CButton type="primary" className="rounded-lg" link="/dat-lich" icon={<FontAwesomeIcon icon={faCalendarDays} />}>
                                <span className="font-bold">ĐẶT LỊCH</span>
                            </CButton>
                        </CCol>
                        <CCol xs={12}>
                            <a href="tel:0338230318">
                                <CButton type="primary" danger className="rounded-lg" icon={<FontAwesomeIcon icon={faPhone} />}>
                                    <span className="font-bold">033 8230 318</span>
                                </CButton>
                            </a>
                        </CCol>
                    </CRow>
                </CCol>
            </CRow>
        </Header>
    );
}


// "use client";
// import { Header } from "antd/es/layout/layout";
// import { Avatar, Menu } from "antd";
// import Link from "next/link";
// import CRow from "@/custom_antd/CRow";
// import CCol from "@/custom_antd/CCol";
// import { usePathname } from "next/navigation";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import CButton from "@/custom_antd/CButton";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { useEffect } from "react";
// import { getCategories } from "@/apis/categoryApi";

// export default function AppHeader() {
//     const choose = usePathname();
//     const dispatch = useAppDispatch();
//     const category = useAppSelector((state) => state.category);

//     const items = [
//         {
//             key: "/trang-chu",
//             label: "Trang chủ"
//         },
//         {
//             key: "/gioi-thieu",
//             label: "Giới thiệu"
//         },
//         {
//             key: "/danh-muc",
//             label: "Dịch vụ",
//             children: category.data.map((c) => ({
//                 key: `/danh-muc/${c.id}`,
//                 label: c.name,
//             })),
//         },
//         {
//             key: "/doi-ngu-nha-si",
//             label: "Đội ngũ nha sĩ"
//         }
//     ];

//     useEffect(() => {
//         if (category.status === 'completed' || category.status === 'rejected') {
//             dispatch(getCategories());
//         }
//     }, [category.status, dispatch]);

//     return (
//         <Header className="!bg-[#fff] border-b border-[#f1f1f1] shadow-xl fixed top-0 left-0 w-full z-50">
//             <CRow className="h-full">
//                 <CCol xs={4} className="h-[64px]">
//                     <Link href="/"><Avatar shape="square" size={64} src="/logo.png" /></Link>
//                 </CCol>
//                 <CCol xs={15} className="h-full">
//                     <Menu
//                         className="h-full"
//                         mode={"horizontal"}
//                         selectedKeys={[choose]}
//                     >
//                         {items.map((item) =>
//                             item.children ? (
//                                 <Menu.SubMenu
//                                     className="text-[16px] font-[500] !px-7"
//                                     key={item.key}
//                                     title={item.label}
//                                 >
//                                     {item.children.map((subItem) => (
//                                         <Menu.Item key={subItem.key}>
//                                             <Link className="text-[16px] font-[500]" href={subItem.key}>{subItem.label}</Link>
//                                         </Menu.Item>
//                                     ))}
//                                 </Menu.SubMenu>
//                             ) : (
//                                 <Menu.Item key={item.key}>
//                                     <Link className="text-[16px] font-[500] px-3" href={item.key}>{item.label}</Link>
//                                 </Menu.Item>
//                             )
//                         )}
//                     </Menu>
//                 </CCol>
//                 <CCol xs={5} className="h-full">
//                     <CRow>
//                         <CCol xs={12}>
//                             <CButton type="primary" className="rounded-lg" link="dat-lich" icon={<FontAwesomeIcon icon={faCalendarDays} />}>
//                                 <span className="font-bold">ĐẶT LỊCH</span>
//                             </CButton>
//                         </CCol>
//                         <CCol xs={12}>
//                             <a href="tel:0338230318">
//                                 <CButton type="primary" danger className="rounded-lg" icon={<FontAwesomeIcon icon={faPhone} />}>
//                                     <span className="font-bold">033 8230 318</span>
//                                 </CButton>
//                             </a>
//                         </CCol>
//                     </CRow>
//                 </CCol>
//             </CRow>
//         </Header>
//     );
// }

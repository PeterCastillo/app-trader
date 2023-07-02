import VuiAvatar from "@/theme/components/VuiAvatar";
import styles from "./tree-styles.css";
import DefaultInfoCard from "@/theme/examples/Cards/InfoCards/DefaultInfoCard";
import { Card, Modal } from "@mui/material";
import { useState } from "react";
import { getCustomersBinaryTotal } from "services/customers";
import BinaryInfo from "../../layouts/dashboards/crm/components/BinaryInfo";

function Branches({ data, root, handleClick, side = 0 }) {

    const [binaryInfo, setBinaryInfo] = useState({});
    const [open, setOpen] = useState(false);

    // obtener el ancho de la pantalla
    const width = window.innerWidth;

    const handleViewBinaryData = async (info, side) => {
        if (!info) return;
        setOpen(true);
        const { data } = await getCustomersBinaryTotal(info.id);
        const { item } = data;
        info.leftCount = item.leftCount;
        info.rightCount = item.rightCount;
        info.totalPointsLeft = item.totalPointsLeft;
        info.totalPointsRight = item.totalPointsRight;
        info.totalPeopleLeft = item.totalPeopleLeft;
        info.totalPeopleRight = item.totalPeopleRight;
        info.side = side;
        setBinaryInfo(info);
    }

    const extraInfoFontSize = 14;

    const handleClose = () => setOpen(false);

    return (
        <li>
            <a>
                <div className="member-view-box">
                    <div className="member-image" onClick={() => handleClick(data)} >
                        {(data?.rankingImage || data?.productImage) &&
                            <img
                                src={data?.rankingImage || data?.productImage}
                                alt="Member"
                                onMouseEnter={() => handleViewBinaryData(data, side)}
                                onMouseLeave={() => setOpen(false)}
                            /> || <VuiAvatar size={width < 768 ? "lg" : "xxl"} bgColor="dark" />}
                        <div className="member-details">
                            <h3>{data?.username}</h3>
                            {data?.ranking && <h4>({data?.ranking})</h4>}
                        </div>


                    </div>

                    {
                        open &&
                        <div>
                            <BinaryInfo binaryInfo={binaryInfo} fontSize={extraInfoFontSize} onClose={handleClose} />
                        </div>
                    }
                </div>
            </a>
            {
                data?.children?.length &&
                (data?.children[0]?.username || data?.children[1]?.username) &&
                <ul>
                    {data?.children?.map((child, i) => <Branches data={child} side={i} root={root} key={i} handleClick={handleClick} />)}
                </ul> || null
            }
        </li>
    )
}

function GenealogyTree({ data, root, handleClick }) {
    return (
        <>
            <style>{treeStyles}</style>
            <div className="genealogy-body genealogy-scroll">
                <div className="genealogy-tree">
                    <ul>
                        {data && data?.id && <Branches data={data} root={root} handleClick={handleClick} />}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default GenealogyTree;

const treeStyles = `
/*----------------genealogy-scroll----------*/

.genealogy-scroll::-webkit-scrollbar {
    width: 5px;
    height: 8px;
}

.genealogy-scroll::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #e4e4e4;
}

.genealogy-scroll::-webkit-scrollbar-thumb {
    background: #212121;
    border-radius: 10px;
    transition: 0.5s;
}

.genealogy-scroll::-webkit-scrollbar-thumb:hover {
    background: #d5b14c;
    transition: 0.5s;
}

/*----------------genealogy-tree----------*/
.genealogy-body {
    white-space: nowrap;
    overflow-y: hidden;
    min-height: 500px;
    padding-top: 10px;
    text-align: center;
}

.genealogy-tree {
    display: inline-block;
}

.genealogy-tree ul {
    padding-top: 20px;
    position: relative;
    padding-left: 0px;
    display: flex;
    justify-content: center;
}

.genealogy-tree li {
    float: left;
    text-align: center;
    list-style-type: none;
    position: relative;
    padding: 20px 5px 0 5px;
}

.genealogy-tree li::before,
.genealogy-tree li::after {
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 2px solid #ccc;
    width: 50%;
    height: 18px;
}

.genealogy-tree li::after {
    right: auto;
    left: 50%;
    border-left: 2px solid #ccc;
}

.genealogy-tree li:only-child::after,
.genealogy-tree li:only-child::before {
    display: none;
}

.genealogy-tree li:only-child {
    padding-top: 0;
}

.genealogy-tree li:first-child::before,
.genealogy-tree li:last-child::after {
    border: 0 none;
}

.genealogy-tree li:last-child::before {
    border-right: 2px solid #ccc;
    border-radius: 0 5px 0 0;
    -webkit-border-radius: 0 5px 0 0;
    -moz-border-radius: 0 5px 0 0;
}

.genealogy-tree li:first-child::after {
    border-radius: 5px 0 0 0;
    -webkit-border-radius: 5px 0 0 0;
    -moz-border-radius: 5px 0 0 0;
}

.genealogy-tree ul ul::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    border-left: 2px solid #ccc;
    width: 0;
    height: 20px;
}

.genealogy-tree li a {
    text-decoration: none;
    color: #666;
    font-family: arial, verdana, tahoma;
    font-size: 11px;
    display: inline-block;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
}

.genealogy-tree li a:hover+ul li::after,
.genealogy-tree li a:hover+ul li::before,
.genealogy-tree li a:hover+ul::before,
.genealogy-tree li a:hover+ul ul::before {
    border-color: #fbba00;
}

/*--------------memeber-card-design----------*/
.member-view-box {
    padding: 0px 5px;
    text-align: center;
    border-radius: 4px;
    position: relative;
}

.member-details {
    color: #AAA;
    font-size: 12px;
}

.member-image {
    width: 100%;
    position: relative;
    cursor: pointer;
}

.member-image img {
    width: 100px;
    height: 100px;
}

.member-image img.info {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    background-color: #1900ff;
    z-index: 1;
}

.member-image img.warning {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    background-color: #f2ff00;
    z-index: 1;
}

@media (max-width: 768px) {
    .member-image img {
        width: 60px;
        height: 60px;
    }
}
`;
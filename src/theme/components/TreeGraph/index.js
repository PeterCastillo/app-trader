import VuiAvatar from "@/theme/components/VuiAvatar";
import VuiBox from "@/theme/components/VuiBox";

const TreeGraph = ({ data, root, handleClick }) => {
    return (
        <VuiBox width="max-content" margin="auto">
            {data && data?.id &&
                <VuiBox
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    alignItems="flex-start"
                >
                    {
                        <VuiBox
                            width="100%"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            mt={1}
                            className={data.id === root ? "root-element" : ""}
                            color="white"
                            fontSize={12}
                            onClick={() => handleClick(data)}
                        >
                            {(data.rankingImage || data.productImage) &&
                                <VuiAvatar
                                    size="xl"
                                    component="button"
                                    style={{ cursor: 'pointer' }}
                                    src={(data.rankingImage || data.productImage)}
                                    bgColor={
                                        (data.id !== root && data.sponsoredBy !== root)
                                            ? "warning"
                                            : "success"
                                    }
                                />
                            }
                            {data.username}
                        </VuiBox>}
                    <VuiBox width="50%">
                        {data.children[0] &&
                            <TreeGraph data={data.children[0]} root={root} handleClick={handleClick} />
                        }
                    </VuiBox>
                    <VuiBox width="50%">
                        {data.children[1] &&
                            <TreeGraph data={data.children[1]} root={root} handleClick={handleClick} />
                        }
                    </VuiBox>
                </VuiBox>
            }
        </VuiBox>
    )
}

export default TreeGraph;

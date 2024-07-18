import React, { useContext } from "react";
import Slider from "@/components/slider";
import { convertByteToSrc } from "@/utils/file";
import { Group, Image, Stack } from "@mantine/core";
import { DetailProductContext, TypeDetailProductContext } from "..";
import classes from "../style.module.css";

const DetailProductImages: React.FC = () => {

    const {
        show,
        listImage,
        setShow,
    } = useContext<TypeDetailProductContext>(DetailProductContext);

    return (
        <Stack>
            <Image
                classNames={{
                    root: classes.avatar
                }}
                src={show ? convertByteToSrc(show.format, show.data) : undefined}
            />
            <Group w={"100%"} mt={16}>
                <Slider
                    listItems={listImage.map(item =>
                        <Image
                            classNames={{
                                root: `${classes.image} ${item.ID === show?.ID && classes.active}`
                            }}
                            src={convertByteToSrc(item.format, item.data)}
                            onClick={() => setShow(item)}
                        />
                    )}
                />
            </Group>
        </Stack>
    )
}

export default DetailProductImages;
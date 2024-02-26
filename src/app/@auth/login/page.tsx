"use client"

import {
  Button,
  Divider,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
  Image
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import IconGoogle from "@/assets/icon/google-color-svgrepo-com.svg";

export default function Page() {

  const isMobile = useMediaQuery(`(max-width: ${564}px)`);

  return (
    <Group
      h={"100%"}
      w={"100%"}
      align="center"
      justify="center"
      bg={"#e0e0e0"}
    >
      <Stack
        align="center"
        p={48}
        w={isMobile ? "100%" : 400}
        h={isMobile ? "100%" : "auto"}
        style={{
          borderRadius: 8,
          backgroundColor: "#f7f7f7",
        }}
      >
        <Title>Đăng nhập</Title>
        <Text
          style={{ textAlign: "center" }}
        >Chào mừng đến với sàn thương mại điện tử của H</Text>
        <TextInput
          label="Email"
          placeholder="Nhập email"
        />
        <TextInput
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
        />

        <Button 
          w={"100%"}
          mt={40}
        >Đăng nhập</Button>

        <Divider 
          label="Hoặc" 
          color="#000"
          labelPosition="center" 
          mt={14}
          mb={14}
          w={"80%"}
        />

        <Button
          w={"100%"}
          variant="outline"
          leftSection={<Image height={18} width={18} src={IconGoogle} />}
          style={{
            backgroundColor: "#fff !important",
            color: "#000",
            borderColor: "#000",
            borderWidth: 2,
          }}
        >Đăng nhập với google</Button>
      </Stack>
    </Group>
  )
}
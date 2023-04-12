import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandGithub, IconCheck } from "@tabler/icons-react";
import KeyModal from "./KeyModal";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <span className={classes.highlight}>智客GPT</span>
            </Title>
            <Text color="dimmed" mt="md">
              一个简单且本地运行的 ChatGPT 用户界面.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>在浏览器上本地运行</b> – 无需安装任何应用
              </List.Item>
              <List.Item>
                <b>比官方 UI 更快</b> – 直接连接到 API
              </List.Item>
              <List.Item>
                <b>轻松集成语音</b> – 无需再打字！
              </List.Item>
              <List.Item>
                <b>使用您自己的 API 密钥</b> – 确保您的数据隐私和安全
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                className={classes.control}
                onClick={open}
              >
                请输入API秘钥
              </Button>
              <Button
                component="a"
                href="https://ai.zhikeb.com"
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
                leftIcon={<IconBrandGithub size={20} />}
              >
                回免费版
              </Button>
            </Group>
          </div>
        </div>
        <Modal opened={opened} onClose={close} title="API Key">
          <KeyModal close={close} />
        </Modal>
      </Container>
    </div>
  );
}

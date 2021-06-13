import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { Link, Button } from "@chakra-ui/react"

const NavBar = () => {
	return (
		<Box>
			<Flex justifyContent="center" alignItems="center" p="0.5em" maxH="10vh">
				<img alt="logo" style={{ height: "6vh", width: "auto" }} src="https://cdn.discordapp.com/attachments/692861972731002995/852270505528655912/output-onlinepngtools_1.png"></img>
				<Spacer />
				<Link href="https://app.sfninety.com">
					<Button>Alpha tester? Get started here.</Button>
				</Link>
			</Flex>
		</Box>
	);
}

export default NavBar;
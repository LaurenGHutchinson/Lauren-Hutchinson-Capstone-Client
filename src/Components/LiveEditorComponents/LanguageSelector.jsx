import React from 'react'
import {Box, Button, Text, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import './LanguageSelector.scss'
import { LANGUAGE_VERSIONS } from '../../constants';
const languages = Object.entries(LANGUAGE_VERSIONS)

const LanguageSelector = ({language, onSelect}) => {

  return (
    <Box className="main-box">
        <Text className="selector-box">
            Language:
        </Text>
        <Menu isLazy>
            <MenuButton as={Button}>{language}</MenuButton>
            <MenuList bg="#110c1b">
                {languages.map(([lang, version]) => (
                <MenuItem key={lang} 
                color={lang === language ? 'blue.400' : ''}
                bg={lang === language ? 'gray.900': 'transparent'}
                _hover={{
                    color: 'blue.400',
                    bg: 'gray.900'
                }}
                onClick={()=> onSelect(lang)}
                >
                    {lang}
                    &nbsp;
                    <Text as="span" className="lang-version">
                    ({version})
                    </Text>
                </MenuItem>
                ))}
            </MenuList>
        </Menu>
    </Box>
  )
}

export default LanguageSelector
import { css, Theme } from '@emotion/react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Box, IconButton, Paper, Snackbar, Table, TableBody, TableCell, TableCellProps, TableContainer, TableProps, TableRow, Typography, TypographyProps } from '@mui/material'
import DomParserReact from 'dom-parser-react'
import { useState } from 'react'
import Link from '../atoms/Link'
import PostHeader from '../molecules/PostHeader'
import { Post as IPost } from '~/domains/post'

interface Props {
  post: IPost
  content: string
}

const codeStyle = (theme: Theme) => css`
  padding: ${theme.spacing(0.5, 1)};
  border-radius: ${theme.spacing(0.5)};
  background-color: #1e1e1e;
  color: #d4d4d4;
  font-family: "SFMono-Regular", Consolas, Menlo, Courier, monospace, monospace;
  font-size: 0.9em;
  pre > & {
    padding: 0;
    background-color: transparent;
  }
`

const breakAllStyle = css`
  word-break: break-all;
`

const codeTitileStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing(0.5, 4)};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: #555;
  color: white;
`

const codeBlockStyle = (theme: Theme) => css`
  overflow: auto;
  padding: ${theme.spacing(1, 4)};
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`

const listStyle = css`
  & & {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const CodeWrapper = ({ title, lang, code, children }: any) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setOpen(true)
    })
  }

  return (
    <Paper elevation={4} sx={{ my: 2 }}>
      <div css={codeTitileStyle}>
        <Typography component="span">
          {lang === 'diff' && title ? `diff: ${title}` : title}
        </Typography>
        <IconButton aria-label="copy" size="small" sx={{ color: 'white' }} onClick={copy}>
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </div>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="コードをコピーしました"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Paper>
  )
}

const Code = (props: any) => {
  const breakAll =
    typeof props.children === 'string' && /^[a-zA-Z$_][a-zA-Z0-9$_.]*$/.test(props.children)

  return (
    <code {...props} css={[codeStyle, breakAll && breakAllStyle]} />
  )
}

const components = {
  p: (props: TypographyProps<'p'>) => <Typography my={2} textAlign="justify" whiteSpace="pre-line" {...props} />,
  h2: (props: TypographyProps<'h2'>) => <Typography my={4} borderBottom="1px solid currentcolor" {...props} component="h2" variant="h4" />,
  h3: (props: TypographyProps<'h3'>) => <Typography my={3} {...props} component="h3" variant="h5" />,
  h4: (props: TypographyProps<'h4'>) => <Typography my={3} {...props} component="h4" variant="h6" />,
  // h5: (props: TypographyProps<'h5'>) => <Typography my={2} {...props} component="h5" variant="h6" />,
  // h6: (props: TypographyProps<'h6'>) => <Typography my={2} {...props} component="h6" variant="h6" />,
  ul: (props: TypographyProps<'ul'>) => <Typography my={2} css={listStyle} {...props} component="ul" />,
  ol: (props: TypographyProps<'ol'>) => <Typography my={2} css={listStyle} {...props} component="ol" />,
  li: (props: TypographyProps<'li'>) => <Typography {...props} component="li" />,
  code: Code,
  pre: (props: TypographyProps<'pre'>) => <Typography component="pre" {...props} css={codeBlockStyle} />,
  a: Link,
  table: (props: TableProps) => (
    <TableContainer component={Paper} variant="outlined">
      <Table {...props} />
    </TableContainer>
  ),
  tbody: TableBody,
  tr: TableRow,
  th: (props: TableCellProps) => <TableCell component="th" {...props} align={props.align || undefined} />,
  td: (props: TableCellProps) => <TableCell {...props} align={props.align || undefined} />,
  'app-code-wrapper': CodeWrapper,
}

export default function Post({ post, content }: Props) {
  return (
    <article>
      <Box mb={4}>
        <PostHeader post={post} />
      </Box>
      <main>
        <DomParserReact source={content} components={components} />
      </main>
    </article>
  )
}

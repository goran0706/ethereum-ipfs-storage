import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import { ButtonGroup, Flex, IconButton, useEditableControls } from '@chakra-ui/react'

const EditableControls = () => {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
    useEditableControls()

  return isEditing ? (
    <ButtonGroup justifyContent='center' size='sm'>
      <IconButton
        aria-label='accept'
        colorScheme='green'
        icon={<CheckIcon />}
        {...getSubmitButtonProps()}
      />
      <IconButton
        aria-label='cancel'
        colorScheme='red'
        icon={<CloseIcon />}
        {...getCancelButtonProps()}
      />
    </ButtonGroup>
  ) : (
    <Flex justifyContent='center'>
      <IconButton aria-label='edit' size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
    </Flex>
  )
}

export default EditableControls

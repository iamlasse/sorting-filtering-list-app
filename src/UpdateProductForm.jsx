import React, { useState, useRef, useEffect } from 'react'
import { Form, Icon, Button } from 'semantic-ui-react';
import { withFormik } from 'formik';

const UpdateProductForm = ({
  product,
  field,
  trigger,
  position,
  dispatch,
  values,
  dirty,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setFieldValue,
  setFieldTouched,
  isValid,
  onSubmit
}) => {
  const [isOpen, setOpen] = useState(false)
  const fieldRef = useRef(null)
  const handleUpdate = async (e) => {
    await handleSubmit(e, setOpen)
    setOpen(false)
  }
  const handleKeyUp = e => {
    if (e.keyCode === 13)
      handleUpdate(e)

    if (e.keyCode === 27)
      setOpen(false)
  }

  const Trigger = <div style={{ cursor: 'pointer', border: 'none', backgroundColor: 'transparent' }} onClick={() => setOpen(!isOpen)} content={`${product[field]}`}>{trigger}</div>

  useEffect(() => {
    if (fieldRef.current) fieldRef.current.select()
  }, [])

  if (!isOpen && !isSubmitting) {
    return Trigger
  }

  return (
    <Form onSubmit={handleUpdate}>
      <Form.Group widths='equal' inline style={{ margin: 0 }}>
        <Form.Input
          size='small'
          width={3}
          value={values[field]}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
          onBlur={handleBlur}
          name={field}
          placeholder={product[field]}
        />
        <Button.Group>
          <Button loading={isSubmitting} type="normal" onClick={handleUpdate} size='mini' icon={<Icon name='check' />} positive />
          <Button type="normal" onClick={() => setOpen(false)} size='mini' icon={<Icon name='close' />} negative />
        </Button.Group>
      </Form.Group>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues: (props) => ({ [props.field]: props.product[props.field] }),
  handleSubmit: async (values, { setSubmitting, resetForm, props: { product, field, onSubmit }, }) => {

    await onSubmit({
      type: 'update_product',
      payload: {
        field,
        value: field === 'price' ? parseFloat(values[field]) : values[field],
        id: product.id
      }
    })
    setSubmitting(false)

  },
  displayName: 'UpdateProduct'
})(UpdateProductForm)
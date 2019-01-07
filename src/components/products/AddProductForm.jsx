import React from 'react'
import { withFormik } from "formik";
import { Form, Dropdown } from "semantic-ui-react";

const AddProductForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setFieldValue,
  setFieldTouched,
  isValid,
  onSubmit,
  categories,
  ...rest
}) => {
  const { name, price, stocked, category } = values

  const categoriesOptions = categories.reduce((acc, category) => {
    return acc.concat({
      text: category.name,
      value: category.id
    })
  }, [])

  const changeCategory = (e, { name, value }) => {
    setFieldValue(name, value)
    setFieldTouched(name)
  }

  return (
    <Form onSubmit={handleSubmit} style={{ padding: 10, }}>
      <Form.Group widths="equal">
        <Form.Input
          error={errors.name && touched.name}
          disabled={isSubmitting} placeholder='Name' name='name' value={name} onChange={handleChange} onBlur={handleBlur} />
        <Form.Input
          error={errors.price && touched.price}
          disabled={isSubmitting}
          onBlur={handleBlur}
          placeholder='Price'
          type="number"
          name='price'
          value={price}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Field width={8}>
          <Dropdown clearable name='category' value={category} onChange={changeCategory} placeholder='Select Category' selection options={categoriesOptions} />
        </Form.Field>
        <Form.Field width={4} style={{ display: 'flex', alignItems: 'center', }}>
          <Form.Checkbox label="In Stock" name="stocked" checked={stocked} id="stocked" onChange={handleChange} />
        </Form.Field>
        <Form.Field width={4}>
          <Form.Button icon='cart' fluid color="violet" type="submit" size="small" disabled={Object.keys(errors).length !== 0 || !isValid} loading={isSubmitting} content='Add Product' />
        </Form.Field>
      </Form.Group>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues: (props) => ({ name: '', price: '', stocked: false, category: '' }),
  validate: (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Error'
    }

    if (!values.price) {
      errors.price = 'Error'
    }

    if (!values.category) {
      errors.category = 'Error'
    }
    return errors
  },
  handleSubmit: (values, { setSubmitting, resetForm, props: { onSubmit } }) => {
    setSubmitting(true)
    onSubmit(values)
    setSubmitting(false)
    resetForm()
  },
  displayName: 'AddProduct'
})(AddProductForm)

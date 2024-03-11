import { Col, Form, Row } from 'antd'
import { Edit, useForm } from '@refinedev/antd'
import { UPDATE_COMPANY_MUTATION } from '@/graphql/mutations'
import CustomAvatar from '@/components/custom-avatar'
import { getNameInitials } from '@/utilities'

const EditPage = () => {
  const { saveButtonProps, formProps, formLoading, queryResult } = useForm({
    redirect: false,
    meta: {
      gqlMutation: UPDATE_COMPANY_MUTATION
    }
  })

  const { avatarUrl, name } = queryResult?.data?.data || {}

  return (
    <div>
      <Row gutter={[32, 32]} >
        <Col xs={24} xl={12}>
          <Edit
            isLoading={formLoading}
            saveButtonProps={saveButtonProps}
            breadcrumb={false}
          />
            <Form {...formProps} layout="vertical" >
              <CustomAvatar shape='circle' src={avatarUrl} name={getNameInitials(name || '')} style={{ width: 96, height: 96, marginBottom: '24px'}} />
            </Form>
        </Col>
      </Row>
    </div>
  )
}

export default EditPage
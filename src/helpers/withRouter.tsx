import { ComponentType } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

interface RouterProps {
  location: ReturnType<typeof useLocation>;
  navigate: ReturnType<typeof useNavigate>;
  params: ReturnType<typeof useParams>;
}

export function WithRouter<Props> (
  Component: ComponentType<Props & { router: RouterProps }>,
) {
  function ComponentWithRouterProp (props: Props) {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}

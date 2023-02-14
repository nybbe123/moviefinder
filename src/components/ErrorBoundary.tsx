import { Component, CSSProperties, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  // Update state so the next render will show the fallback UI.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    const s: CSSProperties | any = {
      container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '2rem'
      },
      title: {
        fontSize: '4.8rem',
        color: '#FDFDFD',
        marginBottom: '1rem'
      },
      text: {
        fontSize: '2.2rem',
        color: '#717378',
        maxWidth: '50rem'
      }
    }

    if (this.state.hasError) {
      return (
        <div style={s.container}>
          <h1 style={s.title}>Ooops...</h1>
          <p style={s.text}>
            Something went wrong while loading the page. Please go back and try
            again.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

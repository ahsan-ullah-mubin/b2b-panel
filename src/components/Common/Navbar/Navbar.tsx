import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Menu } from 'lucide-react';

export  function NavBar() {
  return (
    <div style={{height:'64px'}} >
        <Header style={{ padding: 0 ,position:"fixed", width:"100%" , background:"#353535"}}>
          <Button
            type="text"
            icon={<Menu />}
            // onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
    </div>
  )
}

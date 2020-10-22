import React from 'react';
import {ButtonToolbar, Dropdown, DropdownButton } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';




class Buttons extends React.Component{

    handleSelect = (e) => {
      this.props.gridSize(e);
    }
  
    render() {
      return(
        <div className="center">
          <ButtonToolbar variant="warning">
            <Button variant="outline-success" className="btn btn-default" onClick={this.props.playButton}>Play</Button>
            <Button variant="outline-success" className="btn btn-default" onClick={this.props.pauseButton}>Pause</Button>
            <Button variant="outline-success" className="btn btn-default" onClick={this.props.clear}>Clear</Button>
            <Button variant="outline-success" className="btn btn-default" onClick={this.props.slow}>Slow</Button>
            <Button variant="outline-success" className="btn btn-default" onClick={this.props.fast}>Fast</Button>
            <Button variant="outline-success" className="btn btn-default" onClick={this.props.seed}>Seed</Button>
            <DropdownButton
            variant="outline-success" 
            title="Grid Size"
            id="size-menu"
            onSelect={this.handleSelect}
            >
              <Dropdown.Item eventKey="1">20x10</Dropdown.Item>
              <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
              <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
            </DropdownButton>
          </ButtonToolbar>
        </div>
      )}
  }

  export default Buttons;
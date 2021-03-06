import React from "react";
import { Manager, Target, Popper, Arrow } from "react-popper";
import randomID from "random-id";
import PopoverComponent from "./PopoverComponent";
import TargetComponent from "./TargetComponent";

class Popover extends React.Component {
  constructor(props) {
    super(props);
    this.closePopover = this.closePopover.bind(this);
    this.tooglePopover = this.tooglePopover.bind(this);
    this.openPopover = this.openPopover.bind(this);
    this.state = { isOpen: props.isOpen, id: randomID(10, "a") };
  }
  openPopover() {
    this.setState({ isOpen: true });
  }
  tooglePopover() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  closePopover() {
    this.setState({ isOpen: false });
  }

  render() {
    const {
      className,
      onClose,
      onOpen,
      customArrow,
      isOpen,
      arrow,
      onClick,
      placement,
      render,
      action,
      motion,
      children
    } = this.props;

    return (
      <Manager className="manager" style={{ display: "inline" }} data-target-id={this.state.id}>
        <TargetComponent
          id={this.state.id}
          closePopover={this.closePopover}
          openPopover={this.openPopover}
          tooglePopover={this.tooglePopover}
          action={action}
        >
          {children[0]}
        </TargetComponent>

        {this.state.isOpen ? (
          <PopoverComponent
            key={Math.random(1)}
            motion={motion}
            className={className}
            onClose={onClose}
            onOpen={onOpen}
            customArrow={customArrow}
            onClosePopover={this.closePopover}
            placement={placement}
            {...this.props}
            id={this.state.id}
          />
        ) : null}
      </Manager>
    );
  }
}

Popover.defaultProps = {
  arrow: true,
  placement: "auto",
  action: "click",
  motion: false,
  className: undefined,
  isOpen: false
};

export default Popover;

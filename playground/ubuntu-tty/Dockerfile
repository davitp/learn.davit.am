FROM ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y sudo curl git vim openssh-server zsh build-essential  && \
    rm -rf /var/lib/apt/lists/*

RUN groupadd user && \
    useradd -m -s /bin/bash -g user -p $(openssl passwd -1 user) user

# Add the new user to the sudo group to grant sudo privileges
RUN usermod -aG sudo user

# Switch to the new "user" for subsequent commands
USER user

# Set the working directory to the user's home directory
WORKDIR /home/user

RUN wget -O .zshrc https://grml.org/console/zshrc

# The default command to run when the container starts
CMD ["sleep", "infinity"]
resource "aws_key_pair" "keypa977" {
  key_name   = "keypa977"
  public_key = file("keypa977.pub")
}

resource "aws_default_vpc" "vpc977" {}

resource "aws_security_group" "scg977" {
  name        = "myscg977"
  description = "This is sg for the fitness app configs"
  vpc_id      = aws_default_vpc.vpc977.id

 egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Ingress rules
resource "aws_vpc_security_group_ingress_rule" "allowapp" {
  security_group_id = aws_security_group.scg977.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 8000
  to_port           = 8000
  ip_protocol       = "tcp"
}

resource "aws_vpc_security_group_ingress_rule" "allowjenkins" {
  security_group_id = aws_security_group.scg977.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 8080
  to_port           = 8080
  ip_protocol       = "tcp"
}

resource "aws_vpc_security_group_ingress_rule" "allowssh" {
  security_group_id = aws_security_group.scg977.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 22
  to_port           = 22
  ip_protocol       = "tcp"
}

resource "aws_vpc_security_group_ingress_rule" "allow_http" {
  security_group_id = aws_security_group.scg977.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 80
  to_port           = 80
  ip_protocol       = "tcp"
}

resource "aws_instance" "instance977" {
  instance_type          = "t2.large"
  ami                    = "ami-0360c520857e3138f"
  vpc_security_group_ids = [aws_security_group.scg977.id]
  key_name               = aws_key_pair.keypa977.key_name

  tags = {
    Name = "Terr_977_Ec2"
  }

  root_block_device {
    volume_size = 25
    volume_type = "gp3"
  }
}

resource "local_file" "ansible_inventory" {
  content = <<EOT
[jenkins]
${aws_instance.instance977.public_ip} ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/keypa977
EOT
filename = "${path.module}/../ansible/inventory.ini"
}


